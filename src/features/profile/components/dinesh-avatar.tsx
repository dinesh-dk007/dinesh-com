import Image from "next/image";

import ImgAvatar from "@/../public/images/dinesh-avatar-ghibli.jpg";
import { USER } from "@/data/user";

export function DineshAvatar({
  className,
  size,
  priority = true,
}: {
  className?: string;
  size?: number;
  priority?: boolean;
}) {
  return (
    <Image
      className={className}
      alt={`${USER.displayName}'s avatar`}
      src={ImgAvatar}
      width={size}
      height={size}
      placeholder="blur"
      quality={100}
      priority={priority}
    />
  );
}
