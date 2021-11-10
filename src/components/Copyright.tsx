import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";


export default function Copyright() {
  return (
    <>
      <Typography
        variant="body2"
        color="textSecondary"
        align="center"
        gutterBottom
      >
        {"Copyright © "}
        <Link color="inherit" href="https://hmm.dev/">
          Alex Maingot
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </>
  );
}
