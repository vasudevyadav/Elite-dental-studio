import { NextResponse, type NextRequest } from "next/server";

/**
 * Ad landing pages (PHP) live on the campaign subdomain but must open under the
 * main domain, e.g. elitedentalstudio.co.in/aligner/ -> campaign.../aligner/.
 * Transparent reverse proxy: browser URL never changes; POSTs (submit.php),
 * cookies (PHP session for captcha) and assets pass through.
 */
const CAMPAIGN_ORIGIN =
  process.env.CAMPAIGN_ORIGIN || "https://campaign.elitedentalstudio.co.in";

// Ad landing folders on the campaign site. (/leads/ = internal admin, intentionally excluded.)
const LANDING_DIR = /^\/(aligner|implant|dental-care|coimbatore-[a-z0-9-]+)(\/.*)?$/i;

export function proxy(request: NextRequest) {
  // Plain URL (not request.nextUrl): NextURL re-normalizes trailing slashes.
  const { pathname, search } = new URL(request.url);
  const match = pathname.match(LANDING_DIR);

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

  return NextResponse.rewrite(new URL(`${pathname}${search}`, CAMPAIGN_ORIGIN), {
    request: { headers },
  });
}

export const config = {
  matcher: ["/((?!_next/|api/|favicon.ico).*)"],
};
