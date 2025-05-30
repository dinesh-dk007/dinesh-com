export function DineshMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 512 256"
      {...props}
    >
      <path
        fill="currentColor"
        d="M64 256V0h128v64H128v128h64v64H64Zm384-128-64 128h-64l64-128-64-128h64l64 128Z"
      />
    </svg>
  );
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 128"><path fill="${color}" d="M32 128V0h64v32H64v64h32v32H32Zm192-64-32 64h-32l32-64-32-64h32l32 64Z"/></svg>`;
}