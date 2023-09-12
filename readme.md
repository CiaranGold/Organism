# Mysterious Organism project

## A JavaScript task 

### Context: 
You’re part of a research team that has found a new mysterious organism at the bottom of the ocean near hydrothermal vents.

Your team names the organism, *Pila aequor* (*P. aequor*), and finds that it is only comprised of 15 DNA bases.

The small DNA samples and frequency at which it mutates due to the hydrothermal vents make *P. aequor* an interesting specimen to study.

However, *P. aequor* cannot survive above sea level and locating *P. aequor* in the deep sea is difficult and expensive.

Your job is to create objects that simulate the DNA of *P. aequor* for your research team to study.

### Task requirements:
-  Create a factory function pAequorFactory() that has two parameters:
    - a number (no two organisms should have the same number).
    - an array of 15 DNA bases.

- Simulate P. aequor‘s high rate of mutation (randomly selecting a base in the object’s dna property and changing the current base to a different base)
- Compare the DNA sequences of different *P. aequor*
- *P. aequor* have a likelier chance of survival if their DNA is made up of at least 60% 'C' or 'G' bases- add a method in the returned object of `pAequorFactory()`
    - Return true if the object’s .dna array contains at least 60% 'C' or 'G' bases
- Create 30 instances of *P. aequor* that can survive in their natural environment. Store these instances in an array for your team to study later