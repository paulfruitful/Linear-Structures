class stack:
    def __init__(self):
        self.nodes=[]
    def stack(self,node):
        self.nodes.insert(0,node)
    def unstack(self):
       self.nodes.pop(0)  
    def show(self):
        print(self.nodes)
class queue:
     def __init__(self):
        self.nodes=[]
     def queue(self,node):
        self.nodes.insert(0,node)
     def dequeue(self):
       self.nodes.pop()  
     def show(self):
        print(self.nodes)