import { SOURCE_CODE_GITHUB_URL } from "@/config/site";
import { USER } from "@/data/user";
import { urlToName } from "@/utils/url";

export function Footer() {
  return (
    <footer className="screen-line-before border-x border-edge pt-4 pb-[env(safe-area-inset-bottom,0px)]">
      <p className="mb-1 text-center font-mono text-sm text-balance text-muted-foreground">
        Inspired by tailwindcss.com.
      </p>

      <p className="mb-4 text-center font-mono text-sm text-balance text-muted-foreground">
        Built by{" "}
        <a
          className="link"
          href="https://www.linkedin.com/in/dinesh-kumaar-k/"
          target="_blank"
          rel="noopener"
        >
          dinesh
        </a>
        . The source code is available on{" "}
        <a
          className="link"
          href={SOURCE_CODE_GITHUB_URL}
          target="_blank"
          rel="noopener"
        >
          GitHub
        </a>
        .
      </p>

      <div className="screen-line-before grid grid-cols-2 gap-1 p-4 sm:grid-cols-4">
        {USER.otherWebsites.map((website) => {
          return (
            <span
              key={website}
              className="font-mono text-xs text-muted-foreground"
            >
              {urlToName(website)}
            </span>
          );
          // return (
          //   <a
          //     key={website}
          //     className="font-mono text-xs text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
          //     href={website}
          //     target="_blank"
          //     rel="noopener noreferrer"
          //   >
          //     {urlToName(website)}
          //   </a>
          // );
        })}
      </div>

      {/* <div
        className={cn(
          "screen-line-before",
          "[--pattern-foreground:var(--color-black)]/1 dark:[--pattern-foreground:var(--color-white)]/1",
          "bg-[repeating-linear-gradient(0deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_10px),repeating-linear-gradient(90deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_10px)]",
          "bg-size-[10px_10px] bg-position-[-1px_1px]"
        )}
      >
        <div className="-mx-px py-4">
          <WordmarkHoverEffect />
        </div>
      </div> */}
    </footer>
  );
}
