import pyttsx3 # pip install pyttsx3
import datetime



engine = pyttsx3.init()
# engine.say("Hello World")   # say something
# engine.runAndWait()         # wait for the speech to finish

def speak(word):
    engine.say(word)
    engine.runAndWait()         # wait for the speech to finish

# current time
def time():
    time = datetime.datetime.now().strftime("%H:%M:%S")
    speak("The current time is " + time)

# current date

def date():
    year = int(datetime.datetime.now().year)
    month = int(datetime.datetime.now().month)
    day = int(datetime.datetime.now().day)
    
    speak("The current date is " + str(day) + " " + str(month) + " " + str(year))


def tellTime():
    time()
    date()

# greet user
def greet():
    speak("Welcome back sir!")
    
    hour = datetime.datetime.now().hour
    if(hour>=6 and hour<12):
        speak("Good morning sir!")
        tellTime()
    elif(hour>=12 and hour<18):
        speak("Good afternoon sir!")
        tellTime()
    elif(hour>=18 and hour<24):
        speak("Good evening sir!")
        tellTime()
    else:
        speak("Good night sir!")
        tellTime()
    speak("Phil at your service. Please tell me how can I help you today?")

greet()