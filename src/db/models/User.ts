export const model = (sequelize: any, DataTypes: any) => {
    sequelize.define(
      "User",
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        rol: {
          type: DataTypes.ENUM("ADMIN", "USER"),
          allowNull: false,
          defaultValue: "USER",
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        disabled: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
        }
      },
      { updatedAt: false, timestamps: false }
    );
  };
  