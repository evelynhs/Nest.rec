import cv2 as cv
import mediapipe as mp
import time
from flask import Flask, render_template, Response

app = Flask(__name__, template_folder="../Nest.rec")

BaseOptions = mp.tasks.BaseOptions
PoseLandmarker = mp.tasks.vision.PoseLandmarker
PoseLandmarkerOptions = mp.tasks.vision.PoseLandmarkerOptions
PoseLandmarkerResult = mp.tasks.vision.PoseLandmarkerResult
VisionRunningMode = mp.tasks.vision.RunningMode

camera = cv.VideoCapture(0)  # VIDEO INPUT: WEBCAM. ADJUST FOR RTSP FUNCTIONALITY



# Create a pose landmarker instance with the live stream mode:
def return_result(
    result: PoseLandmarkerResult, output_image: mp.Image, timestamp_ms: int
):
    print("pose landmarker result: {}".format(result))


options = PoseLandmarkerOptions(
    base_options=BaseOptions(model_asset_path="pose_landmarker_lite.task"),
    running_mode=VisionRunningMode.LIVE_STREAM,
    result_callback=return_result,
)

# ret, frame = cap.read()
# mp_image = mp.Image(image_format=mp.ImageFormat.SRGB, data=frame)
# systime = time.time()
# cv.imshow("i love my gf", frame)
# with PoseLandmarker.create_from_options(options) as landmarker:
#     # The landmarker is initialized. Use it here.
#     # ...
#     landmarker.detect_async(mp_image, 0)


# frame generation loop
def generate_frames():
    while True:
        ret, frame = camera.read()
        if not ret:
            break
        else:
            mp_image = mp.Image(image_format=mp.ImageFormat.SRGB, data=frame)
            with PoseLandmarker.create_from_options(options) as landmarker:
                # The landmarker is initialized. Use it here.
                # ...
                landmarker.detect_async(mp_image, 0)
            ret, buffer = cv.imencode(".jpg", frame)
            stream_frame = buffer.tobytes()

        yield (
            b"--frame\r\n" b"Content-Type: image/jpeg\r\n\r\n" + stream_frame + b"\r\n"
        )


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/video")
def video():
    return Response(
        generate_frames(), mimetype="multipart/x-mixed-replace; boundary=frame"
    )

@app.route("/logs")
def logs():
    return Response(
    )


if __name__ == "__main__":
    app.run()


# cap = cv.VideoCapture(0)
# while cap.isOpened():
#     ret, frame = cap.read()
#     mp_image = mp.Image(image_format=mp.ImageFormat.SRGB, data=frame)
#     systime = time.time()
#     cv.imshow("i love my gf", frame)
#     with PoseLandmarker.create_from_options(options) as landmarker:
#         # The landmarker is initialized. Use it here.
#         # ...
#         landmarker.detect_async(mp_image, 0)

#     if cv.waitKey(1) & 0xFF == ord("q"):
#         break

camera.release()
cv.destroyAllWindows()
