import pyttsx3 # pip install pyttsx3
import speech_recognition as sr # pip install speechRecognition

engine = pyttsx3.init()

def speak(word):
    engine.say(word)
    engine.runAndWait()         # wait for the speech to finish

def takeCommand():
    r = sr.Recognizer()
    with sr.Microphone() as source:
        print("Listening...")
        r.pause_threshold = 1
        audio = r.listen(source)
        
    try:
        print("Recognizing...")
        query = r.recognize_google(audio, language='en-in')
        print(query)
    except Exception as e:
        print(e)
        speak("Say that again please...")
        return "None"
    
    return query


# greet user
def greet():
    speak("Welcome back sir!")
    
    speak("Phil here. Please what is your name?")
    query = takeCommand()

    # tell query so that it can be used in other files
    speak("Did you say your name is "+ query)
greet()