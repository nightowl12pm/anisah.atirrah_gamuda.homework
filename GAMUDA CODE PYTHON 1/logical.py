# and -> Both sides must be True
# or -> AT LEAST ONE side must be True
# not -> flips True to False, False to True

age = 5
print(age >0 and age < 10) # True
print(age > 0 or age > 10) # True
print (not(age > 3))       # False