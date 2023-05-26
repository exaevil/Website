module.exports = (sequelize, DataTypes) => {
  const Links = sequelize.define("Links", {
    link: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // image: {
    //   type: DataTypes.OBJECT,
    //   default: {
    //       url : "https://w7.pngwing.com/pngs/276/546/png-transparent-computer-icons-user-others-miscellaneous-black-svg.png"
    //       publicId : null,
    //     }
    //   allowNull: true,
    // },
    desc: {
      type: DataTypes.STRING,
      allowNull: true,
      datetime: DataTypes.DATE,
    },
  });

  return Links;
};
