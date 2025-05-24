import * as React from "react";

export function ChanhDaiWordmark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 512 256"
      width={props.width || 512}
      height={props.height || 256}
      {...props}
    >
      {/* D */}
      <path
        fill="currentColor"
        d="M64 0h96c53.02 0 96 42.98 96 96s-42.98 96-96 96H64V0zm32 160h32c35.35 0 64-28.65 64-64s-28.65-64-64-64H96v128z"
      />
      {/* K */}
      <path
        fill="currentColor"
        d="M288 0h64v96l64-96h80l-80 112 80 112h-80l-64-96v96h-64V0z"
      />
    </svg>
  );
}

export function getChanhDaiWordmarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 256" width="512" height="256">
    <path fill="${color}" d="M64 0h96c53.02 0 96 42.98 96 96s-42.98 96-96 96H64V0zm32 160h32c35.35 0 64-28.65 64-64s-28.65-64-64-64H96v128z"/>
    <path fill="${color}" d="M288 0h64v96l64-96h80l-80 112 80 112h-80l-64-96v96h-64V0z"/>
  </svg>`;
}