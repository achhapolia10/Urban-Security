# -*- coding: utf-8 -*-
"""
Created on Sat Mar 23 02:17:08 2019

@author: aryaman
"""

from imageai.Detection import VideoObjectDetection
import os
import cv2

execution_path = os.getcwd()

camera = cv2.VideoCapture(0) 

detector = VideoObjectDetection()
detector.setModelTypeAsYOLOv3()
detector.setModelPath(os.path.join(execution_path , "yolo(1).h5"))
detector.loadModel()

custom_objects = detector.CustomObjects(person=True)

video_path = detector.detectCustomObjectsFromVideo(custom_objects=custom_objects,camera_input=camera,
                                output_file_path=os.path.join(execution_path, "camera_detected_1")
                                , frames_per_second=12, log_progress=True)
print(video_path)
camera.release()