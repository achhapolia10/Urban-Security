# -*- coding: utf-8 -*-
"""
Created on Sat Mar 23 01:08:15 2019

@author: aryaman
"""

from imageai.Detection import VideoObjectDetection
import os

execution_path = os.getcwd()

detector = VideoObjectDetection()
detector.setModelTypeAsYOLOv3()
detector.setModelPath( os.path.join(execution_path , "yolo(1).h5"))
detector.loadModel()

custom_objects = detector.CustomObjects(person=True)

video_path = detector.detectCustomObjectsFromVideo(custom_objects=custom_objects,input_file_path=os.path.join( execution_path, "iitg.mp4"),
                                output_file_path=os.path.join(execution_path, "iitg_Detected_1")
                                , frames_per_second=12, log_progress=True)

print(video_path)