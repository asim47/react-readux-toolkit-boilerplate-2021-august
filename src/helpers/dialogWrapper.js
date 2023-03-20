import React from "react";
import withStyles from "@mui/styles/withStyles";
import Dialog from "@mui/material/Dialog";
import MuiDialogTitle from "@mui/material/DialogTitle";
import MuiDialogContent from "@mui/material/DialogContent";
import MuiDialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { LIGHT_BLUE } from "../constants";

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: "absolute",
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
    disclaimerRoot: {
        margin: 0,
        padding: theme.spacing(2),
        backgroundColor: LIGHT_BLUE,
    }
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, titleBarColor, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={titleBarColor ? classes.disclaimerRoot : classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton
                    style={{color: titleBarColor ? "#fff" : ""}}
                    aria-label="close"
                    className={classes.closeButton}
                    onClick={onClose}
                    size="large">
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

function DialogWrapper(props) {
    const [open, setOpen] = React.useState(false);


    return (
        <Dialog

            maxWidth={props.maxWidth ? props.maxWidth : "md"}
            fullWidth
            onClose={(event, reason) => {
                if (reason == "backdropClick") return;
                props.onClose();
            }}
            aria-labelledby="customized-dialog-title"
            open={props.open}
        >
            <DialogTitle
                style={{ color: props.titleColor ? props.titleColor : "#333333", }}
                id="customized-dialog-title"
                onClose={props.hideCrossButton ? false : () => props.onClose()}
                titleBarColor={props.titleBarColor}
            >
                {props.title}
            </DialogTitle>
            <DialogContent style={{ overflowY: "scroll" }} dividers={!props.NoHeader}  >
                {
                    props.content
                }
            </DialogContent>
            {
                !props.NoFooter ? (
                    <DialogActions style={{ overflow: "hidden" }} >
                        {
                            props.footerButtons
                        }
                    </DialogActions>
                ) : null
            }

        </Dialog>
    );
}

DialogWrapper.propTypes = {
    title: PropTypes.element.isRequired,
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    content: PropTypes.element.isRequired,
    footerButtons: PropTypes.element.isRequired,
    maxWidth: PropTypes.string,
    titleColor: PropTypes.string.isRequired,
    NoFooter: PropTypes.bool.isRequired,
    NoHeader: PropTypes.bool.isRequired,
    hideCrossButton: PropTypes.bool,
};

export default DialogWrapper;