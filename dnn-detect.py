import cv2 as cv
import mediapipe as mp


cap = cv.VideoCapture(0)
while cap.isOpened():
    ret, frame = cap.read()
    cv.imshow("window", frame)
    if cv.waitKey(1) and 0xFF == ord("q"):
        break
cap.release()
cv.destroyAllWindows()

bo = mp.tasks.BaseOptions
pl = mp.tasks.vision.PoseLandmarker
plo = mp.tasks.vision.PoseLandmarkerOptions
plr = mp.tasks.vision.PoseLandmarkerResult
vrm = mp.tasks.vision.RunningMode


# Create a pose landmarker instance with the live stream mode:
def print_result(result: plr, output_image: mp.Image, timestamp_ms: int):
    print("pose landmarker result: {}".format(result))


options = plo(
    base_options=bo(model_asset_path=cap),
    running_mode=vrm.LIVE_STREAM,
    result_callback=print_result,
)


with pl.create_from_options(options) as landmarker:
    detection_result = landmarker.detect(cap)
