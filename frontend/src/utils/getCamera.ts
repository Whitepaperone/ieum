// 카메라 가져오기
const startCamera = async (
  videoRef: React.RefObject<HTMLVideoElement>,
  setIsCameraReady: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
    });
    if (videoRef.current) {
      videoRef.current.srcObject = stream;
      videoRef.current.play();
      setIsCameraReady(true);

      // 비디오의 너비와 높이 가져오기
      const { videoWidth, videoHeight } = videoRef.current;

      // 비디오 화면이 꽉 차도록 조절하기
      const videoRatio = videoWidth / videoHeight;
      const windowRatio = window.innerWidth / window.innerHeight;
      if (videoRatio > windowRatio) {
        videoRef.current.style.width = "100%";
        videoRef.current.style.height = "auto";
      } else {
        videoRef.current.style.width = "auto";
        videoRef.current.style.height = "100%";
      }
    }
  } catch (err) {
    console.error(err);
  }
};

// 카메라 멈추기
const stopCamera = (videoRef: React.RefObject<HTMLVideoElement>) => {
  if (videoRef.current) {
    const stream = videoRef.current.srcObject as MediaStream;
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
    }
  }
};

// 카메라 사진찰영
const captureImage = async (videoRef: React.RefObject<HTMLVideoElement>) => {
  if (videoRef.current) {
    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    canvas
      .getContext("2d")
      ?.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

    const dataURL = canvas.toDataURL("image/png");
    return dataURL;
  } else {
    throw new Error("Video element is not available.");
  }
};
export { startCamera, stopCamera, captureImage };