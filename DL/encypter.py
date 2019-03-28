# -*- coding: utf-8 -*-
"""
@author: tanma
"""
import numpy as np
from keras.models import Model
from keras.layers import Input, Dense

x = list(range(100))

encoder_inp = Input(shape = (1,))
enc = Dense(2)(encoder_inp)
for i in range(2,10):
    enc = Dense(2**i)(enc)
enc_out = Dense(1024)(enc)
encoder = Model(encoder_inp,enc_out)

decoder_inp = Input(shape = (1024,))
dec = Dense(512)(decoder_inp)
for i in range(2,10):
    dec = Dense(2**(10-i))(dec)
dec_out = Dense(1)(dec)
decoder = Model(decoder_inp,dec_out)

autoencoder = Model(encoder_inp, decoder(encoder(encoder_inp)))

autoencoder.compile(loss = 'mse', optimizer = 'nadam')    

autoencoder.fit(x,x,batch_size = 10, epochs = 20, validation_split = 0.15)
