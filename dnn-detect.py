import cv2 as cv
import mediapipe as mp
import time
from flask import Flask, render_template, Response

app = Flask(__name__)
camera = cv.VideoCapture(0)


def generate_frames():
    while True:
        success, frame = camera.read()
        if not success:
            break
        else:
            ret, buffer = cv.imencode(".jpg", frame)
            frame = buffer.tobytes()

        yield (b"--frame\r\n" b"Content-Type: image/jpeg\r\n\r\n" + frame + b"\r\n")


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/video")
def video():
    return Response(
        generate_frames, mimetype="multipart/x-mixed-replace; boundary=frame"
    )


if __name__ == "__main__":
    app.run(debug=True)


# BaseOptions = mp.tasks.BaseOptions
# PoseLandmarker = mp.tasks.vision.PoseLandmarker
# PoseLandmarkerOptions = mp.tasks.vision.PoseLandmarkerOptions
# PoseLandmarkerResult = mp.tasks.vision.PoseLandmarkerResult
# VisionRunningMode = mp.tasks.vision.RunningMode


# # Create a pose landmarker instance with the live stream mode:
# def print_result(
#     result: PoseLandmarkerResult, output_image: mp.Image, timestamp_ms: int
# ):
#     print("pose landmarker result: {}".format(result))


# options = PoseLandmarkerOptions(
#     base_options=BaseOptions(model_asset_path="pose_landmarker_lite.task"),
#     running_mode=VisionRunningMode.LIVE_STREAM,
#     result_callback=print_result,
# )


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
# cap.release()
# cv.destroyAllWindows()
