import React from "react";

interface Person {
  firstName: string;
  lastName: string;
}

interface Props {
  text: string;
  ok?: boolean;
  i?: number;
  fn?: (bob: string) => string;
  obj?: {
    f1: string;
  };
  person: Person;
}

export const TextField: React.FC<Props> = ({ person, text }) => {
  return (
    <div>
      <span>
        {person.firstName} {person.lastName}
      </span>
      <span>{text}</span>
      <input type="text" />
    </div>
  );
};
