import Link from 'next/link';

function GuestButtonLink({ href, children, ...props }) {
  return (
    <Link href={href} passHref legacyBehavior>
      <button {...props}>
        {children}
      </button>
    </Link>
  );
}

export default GuestButtonLink;