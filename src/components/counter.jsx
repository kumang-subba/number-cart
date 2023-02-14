import React, { Component } from "react";
import CustomizedBadges from "./cart";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

class Counter extends Component {
  render() {
    return (
      <React.Fragment>
        <Box
          sx={{
            boxShadow: 10,
            display: "inline-flex",
          }}
        >
          <Card variant="outlined" sx={{ bgcolor: "#696564" }}>
            <CardContent>
              <h2 style={{ margin: 6 }}>Counter #{this.props.counter.id}</h2>
              <CustomizedBadges value={this.props.counter.value} />
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                style={{ margin: 6 }}
                onClick={() => this.props.onIncrement(this.props.counter)}
              >
                Increase
              </Button>
              <Button
                onClick={() => this.props.onDelete(this.props.counter.id)}
                variant="outlined"
                color="error"
                startIcon={<DeleteIcon />}
              >
                Delete
              </Button>
            </CardActions>
          </Card>
        </Box>
      </React.Fragment>
    );
  }
}

export default Counter;
