import { NextResponse, type NextRequest } from "next/server";

/**
 * Ad landing pages (PHP) live on the campaign subdomain but must open under the
 * main domain, e.g. elitedentalstudio.co.in/aligner/ -> campaign.../aligner/.
 * Transparent reverse proxy: browser URL never changes; POSTs (submit.php),
 * cookies (PHP session for captcha) and assets pass through.
 */
const CAMPAIGN_ORIGIN = process.env.CAMPAIGN_ORIGIN || "https://campaign.elitedentalstudio.co.in";

// Folders served from the campaign site: ad landing pages, the /leads/ admin panel,
// and /includes/ (shared CSS/assets the leads panel loads from the site root).
const LANDING_DIR =
  /^\/(aligner|implant|dental-care|leads|includes|coimbatore-[a-z0-9-]+)(\/.*)?$/i;

const CANONICAL_HOST = "elitedentalstudio.co.in";

export function proxy(request: NextRequest) {
  // Plain URL (not request.nextUrl): NextURL re-normalizes trailing slashes.
  const { pathname, search } = new URL(request.url);
  const match = pathname.match(LANDING_DIR);

  // HTTP and www requests -> canonical HTTPS URL (single permanent hop, path and
  // query kept, trailing slash fixed in the same hop). Prefer x-forwarded-proto
  // because production TLS is terminated by the hosting proxy before Next.js.
  const host = (request.headers.get("host") || "").toLowerCase().split(":")[0];
  const forwardedProto = request.headers.get("x-forwarded-proto")?.split(",")[0].trim();
  const protocol = forwardedProto || new URL(request.url).protocol.replace(":", "");
  if (
    (host === CANONICAL_HOST || host === `www.${CANONICAL_HOST}`) &&
    (protocol === "http" || host.startsWith("www."))
  ) {
    let target = pathname;
    if (match && !match[2]) target = `${pathname}/`;
    else if (!match && target.length > 1 && target.endsWith("/"))
      target = target.replace(/\/+$/, "");
    return NextResponse.redirect(`https://${CANONICAL_HOST}${target}${search}`, 308);
  }

  if (!match) {
    // skipTrailingSlashRedirect is on, so keep "/about/" -> "/about" for the rest of the site.
    if (pathname.length > 1 && pathname.endsWith("/")) {
      const url = new URL(request.url);
      url.pathname = pathname.replace(/\/+$/, "");
      return NextResponse.redirect(url, 308);
    }
    return NextResponse.next();
  }

  // "/aligner" -> "/aligner/" so relative links (css/, js/, submit.php) resolve inside the folder.
  if (!match[2]) {
    const url = new URL(request.url);
    url.pathname = `${pathname}/`;
    return NextResponse.redirect(url, 308);
  }

  // Tell PHP the public host so hidden url/returnURL fields and redirects can use the main domain.
  const headers = new Headers(request.headers);
  headers.set("x-forwarded-host", request.headers.get("host") || "elitedentalstudio.co.in");
  headers.set("x-forwarded-proto", "https");

  const response = NextResponse.rewrite(new URL(`${pathname}${search}`, CAMPAIGN_ORIGIN), {
    request: { headers },
  });

  // /leads/ (admin panel) and /includes/ (its shared assets) must never be indexed,
  // on top of the robots.txt Disallow.
  if (/^\/(leads|includes)(\/.*)?$/i.test(pathname)) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }

  return response;
}

export const config = {
  // Run on every request so HTTP cannot bypass the HTTPS redirect on APIs or assets.
  matcher: ["/:path*"],
};
