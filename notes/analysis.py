'''
Example file for parsing and processing JSON
'''
import pandas as pd
import matplotlib.pyplot as plt
from matplotlib import style 
import urllib.request
import json
import math


style.use('ggplot')

#Define variable to list resource url
urlData = "http://mei-eilab-srv.rd.tut.fi/api/harvesters/motortemp"
urlData2 = "http://mei-eilab-srv.rd.tut.fi/api/harvesters/fuellevel"

webURL = urllib.request.urlopen(urlData)
webURL2 = urllib.request.urlopen(urlData2)

#open the URL and read the data
data = webURL.read()
data2 = webURL2.read()

encoding = webURL.info().get_content_charset('utf-8')
entry = json.loads(data.decode(encoding))
encoding = webURL2.info().get_content_charset('utf-8')
entry2 = json.loads(data2.decode(encoding))

#print(entry)

#creating dataframe for entry and entry2, data obtained from the web urls
df1 = pd.DataFrame(entry)
df2 = pd.DataFrame(entry2)

#concating dataframes and printing by oiltemp and motortemp columns of the concated data frame  
##concat = pd.concat([df2, df1])
##print(concat[['oiltemp', 'motortemp']])

#Example append
##df3 = df1.append(df2)
##print(df3[['oiltemp', 'motortemp']])

#merging the two data frames 
merged = pd.merge(df1,df2, on ='createdAt', how='outer')
merged.set_index('createdAt', inplace = True)
df = merged[['motortemp', 'fuellevel']]
print(df)






