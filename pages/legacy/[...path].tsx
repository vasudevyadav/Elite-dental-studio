import type { GetServerSideProps, InferGetServerSidePropsType } from "next";

const LEGACY_ORIGIN = "https://legacy.elitedentalstudio.co.in";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const path = Array.isArray(context.params?.path)
    ? context.params.path.join("/")
    : context.params?.path || "";

  const url = `${LEGACY_ORIGIN}/${path}`;

  try {
    const response = await fetch(url, {
      headers: {
        Accept: context.req.headers.accept || "text/html,*/*",
        "User-Agent": context.req.headers["user-agent"] || "Elite-Dental-Next-Proxy",
        ...(context.req.headers.cookie ? { Cookie: context.req.headers.cookie } : {}),
      },
    });

    const contentType = response.headers.get("content-type") || "text/html; charset=UTF-8";

    const body = await response.text();

    context.res.statusCode = response.status;
    context.res.setHeader("Content-Type", contentType);

    const cacheControl = response.headers.get("cache-control");

    if (cacheControl) {
      context.res.setHeader("Cache-Control", cacheControl);
    }

    return {
      props: {
        html: body,
      },
    };
  } catch (error) {
    console.error("Legacy proxy error:", error);

    context.res.statusCode = 502;

    return {
      props: {
        html: "<h1>Legacy server unavailable</h1>",
      },
    };
  }
};

export default function LegacyPage({
  html,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  );
}
