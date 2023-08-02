import React from "react";

type Props = {
  title: string;
};

export default function Header({ title }: Props) {
  return (
    <header className='text-2xl mt-10 uppercase tracking-wider text-center'>
      {title}
    </header>
  );
}