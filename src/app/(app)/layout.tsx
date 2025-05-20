import { Footer } from "@/components/footer";
import { ScrollTop } from "@/components/scroll-top";
import { cn } from "@/lib/cn";

import { StickyHeader } from "./sticky-header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <StickyHeader />

      <div className="max-w-screen overflow-x-hidden">
        <div className="mx-auto px-4 md:max-w-3xl">
          <div className="mt-2 min-h-[calc(100vh-0.5rem)] border-x border-edge">
            <div className="screen-line-after flex h-12" />

            <div
              className={cn(
                "h-8 px-2",
                "screen-line-after",
                "before:absolute before:-left-[100vw] before:-z-1 before:h-full before:w-[200vw]",
                "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56"
              )}
            />

            {children}
          </div>

          <Footer />
        </div>
      </div>

      <ScrollTop />
    </>
  );
}
