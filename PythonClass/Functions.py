


def sayHi(i,x):
    if(x>18):
        print("Hi " + i + "! You are above age for this class")
    else:
        print("Hi " + i + "! You are " + str(x) + " years old!")

name = input("Enter your name: ")
age = input("Enter your age: ")

sayHi(name, int(age))