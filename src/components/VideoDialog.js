import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import PlayArrow from '@material-ui/icons/PlayArrow';
import Video from './Video';

const VideoButton = styled(Button)`
  padding: 0 !important;
  border: 0 !important;
`

const Image = styled.img`
  border-radius: 1rem;
  overflow: hidden;
`

const PlayIcon = styled(PlayArrow)`
  color: #ffffff;
  font-size: 2.5rem !important;
`

const IconWrapper = styled.div`
  position: absolute;
  padding-top: 0.5rem;
  border-radius: 1rem;
  width: 5rem;
  background-color: rgba(0, 0, 0, 0.6);

  &:hover {
    background-color: rgba(255, 255, 255, 0.6);
  }

  &:hover > ${PlayIcon} {
    color: #000;
  }
`

const Content = styled(DialogContent)`
  padding: 0 !important;
  background-color: #000;
`

function VideoDialog(props) {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <VideoButton variant="outlined" color="primary" onClick={handleClickOpen}>
        <Image alt="test" src={"https://img.youtube.com/vi/" + props.videoId + "/maxresdefault.jpg"}/>
        <IconWrapper><PlayIcon/></IconWrapper>
      </VideoButton>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={true}
      >
        <Content>
            <Video src={"https://www.youtube.com/embed/" + props.videoId + "?autoplay=1&rel=0"}></Video>
        </Content>
      </Dialog>
    </div>
  );
}

export default VideoDialog;