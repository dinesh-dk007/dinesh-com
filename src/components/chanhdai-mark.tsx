export function ChanhDaiMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 512 256"
      {...props}
    >
      <path
        fill="currentColor"
        d="M0 0h64v256H0V0zm64 64h64v32H64V64zm0 96h64v32H64v-32zm96-160h64v256h-64V0zm64 96h64v32h-64V96zm0 64h64v32h-64v-32zm64-128h64v64h-64V32zm0 160h64v64h-64v-64z"
      />
    </svg>
  );
}
