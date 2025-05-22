import React from 'react';
import { animate } from 'animejs';

export function ChanhDaiMarkDots(props: React.ComponentProps<"div">) {
  React.useEffect(() => {
    const options = {
      grid: [13, 13],
      from: 'center',
    };

    animate(document.querySelectorAll('.dot'), {
      targets: '.dot',
      scale: [1.1, 0.75],
      delay: (_target, i) => i * 200,
      duration: 1500,
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutQuad'
    });
  }, []);

  return (
    <div className="grid grid-cols-13 gap-1" {...props}>
      {Array.from({ length: 169 }).map((_, i) => (
        <div
          key={i}
          className="dot w-2 h-2 bg-current rounded-full"
        />
      ))}
    </div>
  );
}
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
