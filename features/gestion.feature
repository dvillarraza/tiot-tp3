# language: es
# encoding: utf-8

Característica: Gestionar las parejas almacenadas en la lista

Escenario: Verficiar el estado de una lista vacia
    Dado una lista vacía
    Entonces la lista tiene 0 elemento almacenado
    Y si busco la clave "clave" no obtengo ningun valor

Escenario: Agregar un elemento a una lista vacia
    Dado una lista vacía
    Cuando agrego la clave "clave" con el valor "valor"
    Entonces la lista tiene 1 elemento almacenado
    Y si busco la clave "clave" obtengo el valor "valor"

Escenario: Agregar un elemento a una lista que ya esta en la lista 
    Dado una lista con los siguientes elementos
    |  clave  |  valor  |
    Cuando agrego la clave "clave" con el valor "actualizado"
    Y si busco la clave "clave" obtengo el valor "actualizado"    

Escenario: Verificar la cantidad de elementos de una lista 
    Dado una lista con los siguientes elementos
    |  claveA  |   12  |
    |  claveZ  |   7   |
    |  claveB  |   8   |
    Entonces la lista tiene 3 elementos almacenados

Escenario: Agrego un elemento a una lista de elementos  
    Dado una lista con los siguientes elementos
    |  claveA  |   12  |
    |  claveZ  |   7   |
    |  claveB  |   8   |
    Cuando agrego la clave "claveC" con el valor 8   
    Entonces la lista tiene 4 elementos almacenados
    Y el resultado es la siguiente lista ordenada  
    |  claveA  |
    |  claveB  |
    |  claveC  |
    |  claveZ  |

Escenario: Se borra un elemento de una lista de elementos 
    Dado una lista con los siguientes elementos
    | claveA  |   12  |
    | claveZ  |   7   |
    | claveB  |   8   |
    Cuando borro la clave "claveA"
    Entonces si busco la clave "claveA" no existe
 
