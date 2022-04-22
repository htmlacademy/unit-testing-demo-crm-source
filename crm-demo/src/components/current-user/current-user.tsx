import { CurrentUserProps } from './current-user-props';

const CURRENT_USER_1X1_SIZE = 120;

export function CurrentUser(p:CurrentUserProps) {
  const {
    image,
    imageAlt,
    imageSet,
    name,
    role
  } = p;
  return(
    <figure className="main-nav__figure">
      <div className="main-nav__user-picture">
        <img
          width={CURRENT_USER_1X1_SIZE}
          height={CURRENT_USER_1X1_SIZE}
          src={image}
          alt={imageAlt}
          srcSet={imageSet}
        />
      </div>
      <figcaption>
        <p className="main-nav__user-name">{name}</p>
        <p className="main-nav__user-role">{role}</p>
      </figcaption>
    </figure>
  );
}
