export const model = (sequelize: any, DataTypes: any) => {
  sequelize.define(
    "Clients",
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
      customer: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fullName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      billingAdress: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      shippingAdress: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    { updatedAt: false, timestamps: false }
  );
};
