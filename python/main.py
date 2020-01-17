from timeit import time
from random import randrange

def bubble_sort(list):
    for index in range(len(list)):
        swapped = False
        for jdex in range(index, len(list)):
            if (list[index] > list[jdex]):
                list[index], list[jdex] = list[jdex], list[index]
                swapped = True
        if not swapped:
            break

# Lista di partenza da ordinare
mylist = [randrange(1000) for _ in range(10)]

# Algoritmo di ordinamento
print("lista prima:")
print(mylist)
start_time = time.time()

# Scrivere qui l'algoritmo di Bubble Sort
# ... ``

bubble_sort(mylist)

stop_time = time.time()
print(f"{(stop_time-start_time):.7f}")


# Stampo la lista appena calcolata
print("lista dopo:")
print(mylist)