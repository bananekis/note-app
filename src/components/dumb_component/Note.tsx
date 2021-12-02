import { DivNote, DivNoteHeading, H2, H3, PNote } from "../views/Notes";

type Props = {
  article: {
    id: number;
    title: string;
    tag?: string | undefined;
    body: string;
  };
};

const Note = (props: Props) => {
  return (
    <DivNote>
      <DivNoteHeading>
        <H2>{props.article.title}</H2>
        <H3>{props.article.tag !== "" ? `#${props.article.tag}` : ""}</H3>
      </DivNoteHeading>
      <PNote>{props.article.body}</PNote>
    </DivNote>
  );
};

export default Note;
