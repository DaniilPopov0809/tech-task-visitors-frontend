export const handleSubmit = (
  event,
  name,
  lastName,
  visitor,
  dispatch,
  visitorAPI
) => {
  event.preventDefault();
  if (visitor) {
    const { id } = visitor;
    dispatch(visitorAPI.update({ id, name, lastName }));
  }
};
