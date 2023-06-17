import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Checkbox } from "@mui/material";
import { selectAllItems } from "../../reducers/Item/itemSlice";
import { useSelector, useDispatch } from "react-redux";
import { fetchItems } from "../../reducers/Item/itemSlice";

const Posts = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectAllItems);
  const itemStatus = useSelector((state) => state.items.status);

  useEffect(() => {
    if (itemStatus === "idle") {
      dispatch(fetchItems());
    }
  }, [itemStatus, dispatch]);

  let content = [];
  if (itemStatus === "loading") {
    console.log("Loading...");
  } else if (itemStatus === "succeeded") {
    content = items;
    console.log("Content:======" + JSON.stringify(content.items[0].title));
  }

  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={content.items[0].title}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="10%"
        image={content.items[0].image_url}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {content.items[0].description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Posts;
