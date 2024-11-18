export default function Loader({ item, id }) {
  if (item === null) {
    return <Container>Loading...</Container>;
  }

  if (item === undefined) {
    return <Container>Url not found {id}</Container>;
  }
  return <Container>Redirect {item.url}</Container>;
}

function Container({ children }) {
  return <div>{children}</div>;
}