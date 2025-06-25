import { SimpleTooltip } from "@/components/ui/tooltip";
import { USER } from "@/data/user";
import { FlipSentences } from "@/registry/flip-sentences";

import { DineshAvatar } from "./dinesh-avatar";
import { DineshCoverHello } from "./dinesh-cover-hello";
import { VerifiedIcon } from "./verified-icon";

export function Header() {
  return (
    <div className="relative mt-2">
      <div className="flex h-12" />
      <DineshCoverHello />

      <div className="screen-line-after flex border-x border-edge">
        <div className="shrink-0 border-r border-edge">
          <div className="mx-[2px] my-[3px]">
            <DineshAvatar className="size-32 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none sm:size-40" />
          </div>
          {/* Flag of India */}
          {/* <svg
            className="absolute top-0 -left-px h-8 sm:h-9"
            viewBox="0 0 30 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="30" height="20" fill="#FF9933" />
            <rect y="6.666" width="30" height="6.666" fill="#FFFFFF" />
            <rect y="13.333" width="30" height="6.666" fill="#138808" />
            <circle cx="15" cy="10" r="3" fill="#000080" />
            <circle cx="15" cy="10" r="2.5" fill="#FFFFFF" />
            <circle cx="15" cy="10" r="1.5" fill="#000080" />
            <circle cx="15" cy="10" r="0.5" fill="#FFFFFF" />
          </svg> */}
        </div>

        <div className="flex flex-1 flex-col">
          <div className="flex grow items-end mask-r-from-60% pb-1 pl-4">
            <div className="line-clamp-1 font-mono text-xs text-zinc-300 select-none dark:text-zinc-800">
              {"text-3xl "}
              <span className="inline dark:hidden">text-zinc-950</span>
              <span className="hidden dark:inline">text-zinc-50</span>
              {" font-medium"}
            </div>
          </div>

          <div className="border-t border-edge">
            <h1 className="flex items-center pl-4 font-heading text-3xl font-medium">
              {USER.displayName}
              &nbsp;
              <SimpleTooltip
                content={`Official website of ${USER.displayName}`}
              >
                <VerifiedIcon className="size-[0.6em] translate-y-px text-info" />
              </SimpleTooltip>
            </h1>

            <div className="h-12 border-t border-edge py-1 pl-4 sm:h-auto">
              <FlipSentences sentences={[USER.bio, ...USER.flipSentences]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
