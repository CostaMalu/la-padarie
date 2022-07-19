# LaPadariePrime

## Tabelas 

### Product
cada registro descreve todos os produtos disponíveis 
| Campo | Tipo         | Chave                        |
| :---- | :----------- | :--------------------------- |
| id    | int          | primária (auto-incrementada) |
| name  | varchar(255) |                              |
| price | decimal(8,2) |                              |


### Combo
cada registro descreve um combo formado por comboItems
| Campo | Tipo         | Chave                        |
| :---- | :----------- | :--------------------------- |
| id    | int          | primária (auto-incrementada) |
| name  | varchar(50)  |                              |
| price | decimal(8,2) |                              |


### Combo_Item
cada registro especifica qual o produto e a quantidade de determinado produto em um combo
| Campo        | Tipo | Chave                        |
| :----------- | :--- | :--------------------------- |
| id           | int  | primária (auto-incrementada) |
| FK_idCombo   | int  | chave estrangeira            |
| FK_idProduct | int  | chave estrangeira            |
| quantity     | int  |                              |


### Subscription
cada registro relaciona uma assinatura a um combo
| Campo      | Tipo        | Chave                        |
| :--------- | :---------- | :--------------------------- |
| id         | int         | primária (auto-incrementada) |
| name       | varchar(50) |                              |
| FK_idCombo | int         | chave estrangeira            |




## Relacionamentos 

### 1 : 1 (subscription x combo)
Cada assinatura corresponde a um combo e cada combo, a uma assinatura apenas

*comportamento nesse caso: cada combo só pode ser assinalado a uma assinatura. Se ele já estiver assinalado a alguma assinatura e tentarem assinalar a uma outra, a operação não deve ocorrer*

### n : 1 (combo-item x combo)
Cada combo possui n itens, porém cada item só pertence a um único combo. 

*comportamento nesse caso: toda vez que a quantidade de um item do combo for alterada, o preço do combo também o é. Da mesma forma acontece, se um item é excluído ou adicionado ao combo. Um combo que possui itens atrelados não deve ser excluído sem que os itens sejam desvinculados ou excluidos*

### n : n (products x combo)
Cada combo possui n itens, os quais são compostos por produtos. Cada produto pode aparecer em n itens e esses n itens podem estar em vários combos diferentes. 

*comportamento nesse caso: caso o preço de algum produto seja alterado, o preço do combo é diretamente impactado. Um produto vinculado a um item não pode ser deletado e esse item sempre está vinculado a um combo existente.
