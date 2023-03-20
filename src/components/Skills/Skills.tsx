import { useEffect, useState } from "react";
import { SkillsProps } from "./Skills.types";

const Skills = (props: SkillsProps) => {
  const { skills } = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  useEffect(() => {
    // after 1500ms isLoggedIn = true
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 1500);
  }, []);

  return (
    <>
      <ul>
        {skills.map((skill) => {
          return <li key={skill}>{skill} </li>;
        })}
      </ul>

      <span>Hello World</span>

      {isLoggedIn ? (
        <button onClick={login}>Start learning</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </>
  );
};

export default Skills;
