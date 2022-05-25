import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  mustMatchTheHrefExactly?: boolean;
}

export function ActiveLink({
  children,
  mustMatchTheHrefExactly = false,
  ...rest
}: ActiveLinkProps) {
  const { asPath } = useRouter();
  let active = false;

  if (mustMatchTheHrefExactly && (asPath === rest.href || asPath === rest.as)) {
    active = true;
  } else if (
    !mustMatchTheHrefExactly &&
    (asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as)))
  )
    active = true;

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: active ? "pink.400" : "gray.50",
      })}
    </Link>
  );
}
