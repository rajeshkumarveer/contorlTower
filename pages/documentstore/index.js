import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import TreeView from "@mui/lab/TreeView";
import TreeItem, { treeItemClasses } from "@mui/lab/TreeItem";
import { animated } from "react-spring/dist/react-spring.cjs";
import { Card, Collapse } from "@mui/material";
import FeatherIcon from "feather-icons-react";

function MinusSquare(props) {
  return (
    <>
      <FeatherIcon
        icon="folder-minus"
        style={{ width: 15, height: 15 }}
        {...props}
      />
    </>
  );
}

function PlusSquare(props) {
  return (
    <>
      <FeatherIcon
        icon="folder-plus"
        style={{ width: 15, height: 15 }}
        {...props}
      />
    </>
  );
}

function CloseSquare(props) {
  return (
    <Box display="flex" zIndex="1000">
      <FeatherIcon icon="file" style={{ width: 15, height: 15 }} {...props} />
      <Box
        style={{
          position: "absolute",
          right: "15%",
          display: "flex",
          background: "transparent",
          paddingLeft: "3vw",
        }}
      >
        <FeatherIcon
          icon="download"
          style={{ width: 15, height: 15 }}
          {...props}
        />
        <FeatherIcon
          icon="share-2"
          style={{ width: 15, height: 15, margin: "0 2vw" }}
          {...props}
        />
      </Box>
    </Box>
  );
}

function TransitionComponent(props) {
  //   const style = useSpring({
  //     from: {
  //       opacity: 0,
  //       transform: 'translate3d(20px,0,0)',
  //     },
  //     to: {
  //       opacity: props.in ? 1 : 0,
  //       transform: `translate3d(${props.in ? 0 : 20}px,0,0)`,
  //     },
  //   });

  return (
    <animated.div display="flex">
      <Collapse {...props} />
    </animated.div>
  );
}

TransitionComponent.propTypes = {
  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,
};

const StyledTreeItem = styled((props) => (
  <TreeItem
    {...props}
    TransitionComponent={TransitionComponent}
    sx={{ p: 0.8 }}
  />
))(({ theme }) => ({
  [`& .${treeItemClasses.iconContainer}`]: {
    "& .close": {
      opacity: 0.3,
    },
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 15,
    paddingLeft: 18,
    borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`,
  },
}));

const Index = () => {
  return (
    <div  >
      <Typography variant="h5" color="GrayText" sx={{ pl: 2 }}  data-aos="zoom-in-up"   >
        Document Store
      </Typography>
      <Card  data-aos="zoom-in-up"   >
        <TreeView
          aria-label="customized"
          defaultExpanded={["1", "3", "7"]}
          defaultCollapseIcon={<MinusSquare />}
          defaultExpandIcon={<PlusSquare />}
          defaultEndIcon={<CloseSquare />}
          sx={{ height: 550, flexGrow: 1, overflowY: "auto", pt: 1, pb: 1 }}
        >
          <StyledTreeItem nodeId="1" label="Main">
            <StyledTreeItem nodeId="2" label="furniture stocks file 0" />
            <StyledTreeItem nodeId="3" label="Linon furniture">
              <StyledTreeItem nodeId="6" label="furniture stocks file 3" />
              <StyledTreeItem nodeId="7" label="Linon Documents">
                <StyledTreeItem nodeId="9" label="Invoice" />
                <StyledTreeItem nodeId="10" label="Delivery Receipt" />
                <StyledTreeItem nodeId="11" label="Goods Receipt" />
              </StyledTreeItem>
              <StyledTreeItem nodeId="8" label="furniture stocks file 4" />
            </StyledTreeItem>
            <StyledTreeItem nodeId="4" label="furniture stocks file 1" />
            <StyledTreeItem nodeId="5" label="furniture stocks file 2" />
          </StyledTreeItem>
        </TreeView>
      </Card>
    </div>
  );
};

export default Index;
