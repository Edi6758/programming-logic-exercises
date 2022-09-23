def validar_triangulo(): 
    reta1 = int(input("digite o valor da primeira reta "))
    reta2 = int(input("digite o valor da segunda reta "))
    reta3 = int(input("digite o valor da terceira reta "))
    
    if(reta1 > reta3+reta2 or reta2 > reta1+reta3 or reta3 > reta2+reta1):
        print('não é possível formar um triangulo')
    else:
        if(reta1 == reta2 and reta2 == reta3 and reta3 == reta1):
            print('trnângulo equilátero')
        elif(reta1 == reta2 or reta2 == reta3 or reta3 == reta1):
            print('trnângulo isóceles')
        else:
            print('trinagulo escaleno')
validar_triangulo();            