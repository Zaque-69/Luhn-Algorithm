import random, keyboard, sys, time
from threading import Thread
from termcolor import colored

print(colored('''

┏━━━┓╋╋┏┓╋╋╋╋╋┏━━━┓╋╋╋╋╋╋┏┓┏┓╋┏━━━┓╋╋╋╋╋╋┏┓┏━━━┓╋╋╋╋╋╋╋╋╋╋╋╋╋┏┓
┃┏━━┛╋╋┃┃╋╋╋╋╋┃┏━┓┃╋╋╋╋╋╋┃┣┛┗┓┃┏━┓┃╋╋╋╋╋╋┃┃┃┏━┓┃╋╋╋╋╋╋╋╋╋╋╋╋┏┛┗┓
┃┗━━┳━━┫┃┏┳━━┓┃┃╋┗╋━┳━━┳━┛┣┓┏┛┃┃╋┗╋━━┳━┳━┛┃┃┃╋┗╋━━┳━┓┏━━┳━┳━┻┓┏╋━━┳━┓
┃┏━━┫┏┓┃┗┛┫┃━┫┃┃╋┏┫┏┫┃━┫┏┓┣┫┃╋┃┃╋┏┫┏┓┃┏┫┏┓┃┃┃┏━┫┃━┫┏┓┫┃━┫┏┫┏┓┃┃┃┏┓┃┏┛
┃┃╋╋┃┏┓┃┏┓┫┃━┫┃┗━┛┃┃┃┃━┫┗┛┃┃┗┓┃┗━┛┃┏┓┃┃┃┗┛┃┃┗┻━┃┃━┫┃┃┃┃━┫┃┃┏┓┃┗┫┗┛┃┃
┗┛╋╋┗┛┗┻┛┗┻━━┛┗━━━┻┛┗━━┻━━┻┻━┛┗━━━┻┛┗┻┛┗━━┛┗━━━┻━━┻┛┗┻━━┻┛┗┛┗┻━┻━━┻┛
                          Luhn algorithm 

''', 'yellow'))
print(colored("[4]", 'light_cyan'), "Visa")
print(colored("[5]", 'light_cyan'), "MasterCard")
    
first = input("Input : ")

def getRand(startNumber):

    nr = ""
    s = 0

    try:

        for i in range(3):

            nr += str(random.randint(999, 10000))

        nr = str(startNumber) + str(random.randint(99, 999)) + str(nr)

        for i in range(0, 16, 2) :

            #print(str(nr)[i])

            x = int(str(nr)[i]) * 2

            if len(str(x)) == 2 :
                
                fal = int(str(x)[0]) + int(str(x)[-1])
                s += fal
            else : s += x

        for i in range(1, 16, 2):

            s += int(str(nr)[i])
                            
    except : pass
    
    if (s % 10 == 0 and len(nr) == 16) : print(colored('[✓] ', 'green'), nr)
        

while True:

    if keyboard.is_pressed("esc") : break
    
    Thread( target = getRand(first) )

    if keyboard.is_pressed("esc") : break
    
    #print(type(nr))