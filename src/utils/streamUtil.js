const CAPTURE_RATE = 30

export default class StreamUtil {
  constructor(webcamId, canvasId, windowSize) {
    this.webcamId = webcamId;
    this.canvasId = canvasId;
    this.windowSize = windowSize;
  }

  async startStreaming() {
    try {
      this.stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: 'user',
          width: { exact: this.webcamVideoElement.width },
          height: { exact: this.webcamVideoElement.height }
        },
        audio: false
      });
    } catch (e) {
      console.log(e)
    }

    if (!this.stream) {
      throw new Error('Could not obtain video from webcam.');
    }
    // Set srcObject to the obtained stream
    this.webcamVideoElement.srcObject = this.stream;

    this.webcamVideoElement.play();
    this.streaming = true;
    return new Promise(resolve => {
      // Add event listener to make sure the webcam has been fully initialized.
      this.webcamVideoElement.oncanplay = () => {
        resolve();
      };
    });
  }

  async init() {
    this.webcamVideoElement = document.getElementById(this.webcamId);
    try {
      await this.startStreaming();
      this.webcamVideoElement.width = this.webcamVideoElement.videoWidth;
      this.webcamVideoElement.height = this.webcamVideoElement.videoHeight;

      this.scanTimer = setInterval(this.processFrame.bind(this), CAPTURE_RATE);
    } catch (e) {
      console.log(e);
    }
  }

  processFrame() {
    const canvas = document.getElementById(this.canvasId); // get the canvas from the page
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,canvas.width, canvas.height);
    
    ctx.drawImage(this.webcamVideoElement, 0, 0)
  }

  // Clean up resources
  stop() {
    clearInterval(this.scanTimer);

    if (this.webcam) {
      this.webcamVideoElement.pause();
      this.webcamVideoElement.srcObject = null;
    }
    this.streaming = false;
    this.stream.getVideoTracks()[0].stop();
  }
}