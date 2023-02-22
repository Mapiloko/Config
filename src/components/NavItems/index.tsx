import React, { FC } from "react";
import classes from "./NavItems.module.scss";
import { useParams, useNavigate } from "react-router-dom";
import classNames from "classnames";

interface NavItemsProps {
  title: {name : string, route: string};
  is_parent_cat?: boolean; //NOTE: Names may change later
  sub_chapters?: Array<any>;
  icon?: string;
}

const NavItems: FC<NavItemsProps> = ({
  title,
  is_parent_cat,
  sub_chapters = [],
  icon,
}) => {
  const { category, subCat, otp } = useParams();
  const navigate = useNavigate();
  const isSelected = category === title.route || subCat === title.route;

  const handleRedirect = () => {
    if (is_parent_cat) {
      const firstSubCategory = sub_chapters[0] || {};
      navigate(`/${otp}/${title.route}/${firstSubCategory.title.route}`);
      return;
    }
    navigate(`/${otp}/${category}/${title.route}`);
  };

  const navUI = (
    <div
      className={classNames(classes.wrapper, {
        [classes.selected]: isSelected && is_parent_cat,
        [classes.selectedSubCat]: isSelected && !is_parent_cat,
        [classes.parentCat]: is_parent_cat,
        [classes.subCat]: !is_parent_cat,
      })}
      role="button"
      onClick={handleRedirect}
    >
      <span className="material-icons">{icon}</span>
      <div className="ms-2">{title.name}</div>
    </div>
  );

  return (
    <div className="d-flex flex-column">
      {navUI}
      {title.route === category &&
        is_parent_cat &&
        sub_chapters?.map((cat) => <NavItems {...cat} key={cat.title.name} />)}
    </div>
  );
};

NavItems.defaultProps = {
  title: {name : "", route: ""},
  is_parent_cat: false,
  sub_chapters: [],
  icon: "",
};

export default NavItems;
