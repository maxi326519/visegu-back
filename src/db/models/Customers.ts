export const model = (sequelize: any, DataTypes: any) => {
  sequelize.define(
    "Customers",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fullName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      billingAdress: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      shippingAdress: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    { updatedAt: false, timestamps: false }
  );
};
