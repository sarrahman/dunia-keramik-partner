import LoadingButton from "@mui/lab/LoadingButton";
import { Button } from "@mui/material";

const ButtonLoading = (props) => {
  if (props.statusLoading) {
    return (
      <LoadingButton
        loading
        loadingIndicator="Loading..."
        sx={{ mt: 2, width: "100%" }}
        variant="contained"
        color="primary"
      >
        Loading...
      </LoadingButton>
    );
  } else {
    return (
      <Button
        onClick={props.onClick}
        sx={{ mt: 2, width: "100%" }}
        variant="contained"
        color="primary"
      >
        {props.title}
      </Button>
    );
  }
};

export default ButtonLoading;
