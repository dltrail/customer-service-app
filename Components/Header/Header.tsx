import React from "react";

type Props = {
  title: string;
};

export default function Header({ title }: Props) {
  return (
    <header className='text-4xl my-10 uppercase tracking-wider text-center'>
      {title}
    </header>
  );
}
