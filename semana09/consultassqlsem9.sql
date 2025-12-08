USE QhatuPERU;
GO

-- ========================================================================
-- SECCIÓN I: FUNCIONES DE AGREGACIÓN
-- ========================================================================

-- 1. Mostrar CodArticulo, DescripcionArticulo y ValorInventario
SELECT 
    A.CodArticulo,
    A.DescripcionArticulo,
    CAST(A.StockActual * A.PrecioProveedor AS DECIMAL(18,2)) AS ValorInventario
FROM ARTICULO A
ORDER BY A.CodArticulo;
GO

-- 2. Calcular el total monetario del inventario
SELECT 
    SUM(CAST(A.StockActual * A.PrecioProveedor AS DECIMAL(18,2))) AS TotalInventario
FROM ARTICULO A;
GO

-- 3. Obtener CodLinea y PrecioProveedor promedio
SELECT DISTINCT
    A.CodLinea,
    A.PrecioProveedor
FROM ARTICULO A
ORDER BY A.CodLinea;
GO

-- 4. Contar artículos descontinuados
SELECT 
    COUNT(*) AS CantidadDescontinuados
FROM ARTICULO A
WHERE A.Descontinuado = 1;
GO

-- 5. Mostrar PrecioMaximo y PrecioMinimo del catálogo
SELECT 
    MAX(A.PrecioProveedor) AS PrecioMaximo,
    MIN(A.PrecioProveedor) AS PrecioMinimo
FROM ARTICULO A;
GO

-- 6. Mostrar el Valor total enviado por guía
SELECT 
    GE.NumGuia,
    SUM(CAST(GD.PrecioVenta * GD.CantidadEnviada AS DECIMAL(18,2))) AS ValorTotalEnviado
FROM GUIA_ENVIO GE
INNER JOIN GUIA_DETALLE GD ON GE.NumGuia = GD.NumGuia
GROUP BY GE.NumGuia
ORDER BY GE.NumGuia;
GO

-- 7. Para cada CodArticulo, mostrar TotalSolicitado
SELECT 
    OD.CodArticulo,
    SUM(OD.CantidadSolicitada) AS TotalSolicitado
FROM ORDEN_DETALLE OD
GROUP BY OD.CodArticulo
ORDER BY OD.CodArticulo;
GO

-- 8. Contar órdenes únicas que incluyen cada artículo
SELECT 
    OD.CodArticulo,
    COUNT(DISTINCT OD.NumOrden) AS CantidadOrdenes
FROM ORDEN_DETALLE OD
GROUP BY OD.CodArticulo
ORDER BY OD.CodArticulo;
GO

-- 9. Calcular promedio de días para todas las órdenes con FechaSalida
SELECT 
    AVG(CAST(DATEDIFF(DAY, OC.FechaOrden, GE.FechaSalida) AS DECIMAL(10,2))) AS PromedioDias
FROM ORDEN_COMPRA OC
INNER JOIN GUIA_ENVIO GE ON 1=1
WHERE OC.FechaIngreso IS NOT NULL
AND GE.FechaSalida IS NOT NULL;
GO

-- 10. Sumar CantidadEnviada por CodTransportista
SELECT 
    GE.CodTransportista,
    SUM(GD.CantidadEnviada) AS TotalEnviado
FROM GUIA_ENVIO GE
INNER JOIN GUIA_DETALLE GD ON GE.NumGuia = GD.NumGuia
GROUP BY GE.CodTransportista
ORDER BY GE.CodTransportista;
GO

-- ========================================================================
-- SECCIÓN II: CLÁUSULA GROUP BY
-- ========================================================================

-- 11. Mostrar NomLinea y CantArticulos
SELECT 
    L.NomLinea,
    COUNT(A.CodArticulo) AS CantArticulos
FROM LINEA L
LEFT JOIN ARTICULO A ON L.CodLinea = A.CodLinea
GROUP BY L.CodLinea, L.NomLinea
ORDER BY L.NomLinea;
GO

-- 12. Mostrar CodLinea y StockTotal
SELECT 
    L.CodLinea,
    SUM(A.StockActual) AS StockTotal
FROM LINEA L
INNER JOIN ARTICULO A ON L.CodLinea = A.CodLinea
GROUP BY L.CodLinea
ORDER BY L.CodLinea;
GO

-- 13. Para cada NumOrden, calcular CostoTotal = SUM(PrecioCompra*Cantidad)
SELECT 
    OD.NumOrden,
    SUM(CAST(OD.PrecioCompra * OD.CantidadSolicitada AS DECIMAL(18,2))) AS CostoTotal
FROM ORDEN_DETALLE OD
GROUP BY OD.NumOrden
ORDER BY OD.NumOrden;
GO

-- 14. Mostrar NumGuia y PromediOEnviado
SELECT 
    GE.NumGuia,
    AVG(CAST(GD.CantidadEnviada AS DECIMAL(10,2))) AS PromedioEnviado
FROM GUIA_ENVIO GE
INNER JOIN GUIA_DETALLE GD ON GE.NumGuia = GD.NumGuia
GROUP BY GE.NumGuia
ORDER BY GE.NumGuia;
GO

-- 15. Contar proveedores agrupados por Departamento
SELECT 
    P.Departamento,
    COUNT(P.CodProveedor) AS CantProveedores
FROM PROVEEDOR P
GROUP BY P.Departamento
ORDER BY P.Departamento;
GO

-- 16. Mostrar el número de órdenes por día (sin hora)
SELECT 
    CAST(OC.FechaOrden AS DATE) AS Fecha,
    COUNT(OC.NumOrden) AS CantidadOrdenes
FROM ORDEN_COMPRA OC
GROUP BY CAST(OC.FechaOrden AS DATE)
ORDER BY CAST(OC.FechaOrden AS DATE);
GO

-- 17. Sumar (CantidadEnviada*PrecioVenta) por CodTienda
SELECT 
    GE.CodTienda,
    SUM(CAST(GD.CantidadEnviada * GD.PrecioVenta AS DECIMAL(18,2))) AS TotalVentas
FROM GUIA_ENVIO GE
INNER JOIN GUIA_DETALLE GD ON GE.NumGuia = GD.NumGuia
GROUP BY GE.CodTienda
ORDER BY GE.CodTienda;
GO

-- 18. Mostrar artículos cuyo StockActual <= StockMinimo
SELECT 
    A.CodArticulo,
    A.DescripcionArticulo,
    A.StockActual,
    A.StockMinimo
FROM ARTICULO A
WHERE A.StockActual <= A.StockMinimo
ORDER BY A.CodArticulo;
GO

-- 19. Mostrar CodProveedor, NomProveedor y CantArticulos
SELECT 
    P.CodProveedor,
    P.NomProveedor,
    COUNT(A.CodArticulo) AS CantArticulos
FROM PROVEEDOR P
LEFT JOIN ARTICULO A ON P.CodProveedor = A.CodProveedor
GROUP BY P.CodProveedor, P.NomProveedor
ORDER BY P.CodProveedor;
GO

-- 20. Mostrar para cada Estado sumar CantidadSolicitada
SELECT 
    OD.Estado,
    SUM(OD.CantidadSolicitada) AS TotalSolicitado
FROM ORDEN_DETALLE OD
GROUP BY OD.Estado
ORDER BY OD.Estado;
GO

-- ========================================================================
-- SECCIÓN III: CLÁUSULA OVER
-- ========================================================================

-- 21. Asignar posición por línea ordenada por precio
SELECT 
    A.CodLinea,
    A.CodArticulo,
    A.PrecioProveedor,
    ROW_NUMBER() OVER (PARTITION BY A.CodLinea ORDER BY A.PrecioProveedor DESC) AS Posicion
FROM ARTICULO A
ORDER BY A.CodLinea, A.PrecioProveedor DESC;
GO

-- 22. Calcular costo por orden y su RANK(SaldoCalidad)
SELECT 
    OD.NumOrden,
    SUM(CAST(OD.PrecioCompra * OD.CantidadSolicitada AS DECIMAL(18,2))) AS CostoTotal,
    RANK() OVER (ORDER BY SUM(CAST(OD.PrecioCompra * OD.CantidadSolicitada AS DECIMAL(18,2))) DESC) AS RankCosto
FROM ORDEN_DETALLE OD
GROUP BY OD.NumOrden
ORDER BY RankCosto;
GO

-- 23. Mostrar TotalDia y AcumuladoVentas ordenado por fecha
SELECT 
    CAST(GE.FechaSalida AS DATE) AS Fecha,
    SUM(CAST(GD.CantidadEnviada * GD.PrecioVenta AS DECIMAL(18,2))) AS TotalDia,
    SUM(SUM(CAST(GD.CantidadEnviada * GD.PrecioVenta AS DECIMAL(18,2)))) 
        OVER (ORDER BY CAST(GE.FechaSalida AS DATE) ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS AcumuladoVentas
FROM GUIA_ENVIO GE
INNER JOIN GUIA_DETALLE GD ON GE.NumGuia = GD.NumGuia
GROUP BY CAST(GE.FechaSalida AS DATE)
ORDER BY CAST(GE.FechaSalida AS DATE);
GO

-- 24. Calcular precio de orden y su RankSaldoCalidad
SELECT 
    OD.NumOrden,
    OD.CodArticulo,
    CAST(OD.PrecioCompra * OD.CantidadSolicitada AS DECIMAL(18,2)) AS SubTotal,
    RANK() OVER (PARTITION BY OD.NumOrden ORDER BY OD.PrecioCompra DESC) AS RankPrecio
FROM ORDEN_DETALLE OD
ORDER BY OD.NumOrden, RankPrecio;
GO

-- 25. Mostrar PrecioAnteriorMismoProveedor usando LAG
SELECT 
    A.CodProveedor,
    A.CodArticulo,
    A.PrecioProveedor,
    LAG(A.PrecioProveedor) OVER (PARTITION BY A.CodProveedor ORDER BY A.CodArticulo) AS PrecioAnterior
FROM ARTICULO A
ORDER BY A.CodProveedor, A.CodArticulo;
GO

-- 26. Añadir columna CantidadPorLinea a cada artículo
SELECT 
    A.CodLinea,
    A.CodArticulo,
    A.DescripcionArticulo,
    SUM(A.StockActual) OVER (PARTITION BY A.CodLinea) AS CantidadPorLinea
FROM ARTICULO A
ORDER BY A.CodLinea, A.CodArticulo;
GO

-- 27. Mostrar MontoProveedor y PorcentajeDelTotal
SELECT 
    P.CodProveedor,
    P.NomProveedor,
    SUM(CAST(A.StockActual * A.PrecioProveedor AS DECIMAL(18,2))) AS MontoProveedor,
    CAST(SUM(CAST(A.StockActual * A.PrecioProveedor AS DECIMAL(18,2))) * 100.0 / 
        SUM(SUM(CAST(A.StockActual * A.PrecioProveedor AS DECIMAL(18,2)))) OVER () AS DECIMAL(10,2)) AS PorcentajeDelTotal
FROM PROVEEDOR P
LEFT JOIN ARTICULO A ON P.CodProveedor = A.CodProveedor
GROUP BY P.CodProveedor, P.NomProveedor
ORDER BY MontoProveedor DESC;
GO

-- 28. Mostrar solo los 3 artículos más caros por línea
SELECT *
FROM (
    SELECT  
        A.CodLinea,
        A.CodArticulo,
        A.DescripcionArticulo,
        A.PrecioProveedor,
        ROW_NUMBER() OVER (PARTITION BY A.CodLinea ORDER BY A.PrecioProveedor DESC) AS RangoLinea
    FROM ARTICULO A
) AS X
WHERE X.RangoLinea <= 3
ORDER BY X.CodLinea, X.PrecioProveedor DESC;

-- 29. Mostrar transportista y su DenseRank por TotalEnviado
SELECT 
    T.CodTransportista,
    T.NomTransportista,
    SUM(GD.CantidadEnviada) AS TotalEnviado,
    DENSE_RANK() OVER (ORDER BY SUM(GD.CantidadEnviada) DESC) AS DenseRankEnvios
FROM TRANSPORTISTA T
INNER JOIN GUIA_ENVIO GE ON T.CodTransportista = GE.CodTransportista
INNER JOIN GUIA_DETALLE GD ON GE.NumGuia = GD.NumGuia
GROUP BY T.CodTransportista, T.NomTransportista
ORDER BY DenseRankEnvios;
GO

-- 30. Mostrar por guía la suma acumulada por tienda hasta esa guía
SELECT 
    GE.NumGuia,
    GE.CodTienda,
    SUM(CAST(GD.CantidadEnviada * GD.PrecioVenta AS DECIMAL(18,2))) AS VentasGuia,
    SUM(SUM(CAST(GD.CantidadEnviada * GD.PrecioVenta AS DECIMAL(18,2)))) 
        OVER (PARTITION BY GE.CodTienda ORDER BY GE.NumGuia ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS AcumuladoPorTienda
FROM GUIA_ENVIO GE
INNER JOIN GUIA_DETALLE GD ON GE.NumGuia = GD.NumGuia
GROUP BY GE.NumGuia, GE.CodTienda
ORDER BY GE.CodTienda, GE.NumGuia;
GO

-- ========================================================================
-- SECCIÓN IV: OPERADOR PIVOT
-- ========================================================================

-- 31. Mostrar Fechas y columnas CodTienda_1, CodTienda_2, con TotalEnviado por día
SELECT 
    [1001] AS Tienda_1001,
    [1002] AS Tienda_1002,
    [1003] AS Tienda_1003,
    [1004] AS Tienda_1004,
    [1005] AS Tienda_1005
FROM (
    SELECT 
        CAST(GE.FechaSalida AS DATE) AS Fecha,
        GE.NumGuia,
        SUM(GD.CantidadEnviada) AS TotalEnviado
    FROM GUIA_ENVIO GE
    INNER JOIN GUIA_DETALLE GD ON GE.NumGuia = GD.NumGuia
    GROUP BY CAST(GE.FechaSalida AS DATE), GE.NumGuia
) AS datos
PIVOT (
    SUM(TotalEnviado) FOR NumGuia IN ([1001], [1002], [1003], [1004], [1005])
) AS tabla_pivot
ORDER BY Fecha;
GO

-- 32. Mostrar CodArticulo y columnas con cantidades por tienda 1..3
SELECT 
    CodArticulo,
    [101] AS Tienda_101,
    [102] AS Tienda_102,
    [103] AS Tienda_103
FROM (
    SELECT 
        GD.CodArticulo,
        GE.CodTienda,
        GD.CantidadEnviada
    FROM GUIA_ENVIO GE
    INNER JOIN GUIA_DETALLE GD ON GE.NumGuia = GD.NumGuia
) AS datos
PIVOT (
    SUM(CantidadEnviada) FOR CodTienda IN ([101], [102], [103])
) AS tabla_pivot
ORDER BY CodArticulo;
GO

-- 33. Mostrar AñoMes y tiendas como columnas con suma de PrecioVentaCantidad
SELECT 
    [101] AS Tienda_101,
    [102] AS Tienda_102,
    [103] AS Tienda_103,
    [104] AS Tienda_104,
    [105] AS Tienda_105
FROM (
    SELECT 
        YEAR(GE.FechaSalida) * 100 + MONTH(GE.FechaSalida) AS AñoMes,
        GE.CodTienda,
        SUM(CAST(GD.CantidadEnviada * GD.PrecioVenta AS DECIMAL(18,2))) AS TotalVentas
    FROM GUIA_ENVIO GE
    INNER JOIN GUIA_DETALLE GD ON GE.NumGuia = GD.NumGuia
    GROUP BY YEAR(GE.FechaSalida) * 100 + MONTH(GE.FechaSalida), GE.CodTienda
) AS datos
PIVOT (
    SUM(TotalVentas) FOR CodTienda IN ([101], [102], [103], [104], [105])
) AS tabla_pivot
ORDER BY AñoMes;
GO

-- 34. Mostrar CodArticulo con columnas para cada Estado
SELECT 
    CodArticulo,
    [Recibido] AS Recibido,
    [Pendiente] AS Pendiente,
    [Parcial] AS Parcial
FROM (
    SELECT 
        OD.CodArticulo,
        OD.Estado,
        OD.CantidadRecibida
    FROM ORDEN_DETALLE OD
) AS datos
PIVOT (
    SUM(CantidadRecibida) FOR Estado IN ([Recibido], [Pendiente], [Parcial])
) AS tabla_pivot
ORDER BY CodArticulo;
GO

-- 35. Contar artículos por presentación pivotada
SELECT 
    [Caja] AS Caja,
    [Blister] AS Blister,
    [Carrete] AS Carrete,
    [Unidad] AS Unidad,
    [Paquete] AS Paquete,
    [Tubo] AS Tubo,
    [Lata] AS Lata,
    [Documento] AS Documento,
    [Servicio] AS Servicio
FROM (
    SELECT 
        CodLinea,
        Presentacion,
        COUNT(*) AS CantArticulos
    FROM ARTICULO
    GROUP BY CodLinea, Presentacion
) AS datos
PIVOT (
    SUM(CantArticulos) FOR Presentacion IN ([Caja], [Blister], [Carrete], [Unidad], [Paquete], [Tubo], [Lata], [Documento], [Servicio])
) AS tabla_pivot;
GO

-- 36. Generar PIVOT dinámico para todas las tiendas (ejemplo de patrón)
SELECT * FROM (
    SELECT 
        A.CodLinea,
        GE.CodTienda,
        SUM(GD.CantidadEnviada) AS CantidadEnviada
    FROM ARTICULO A
    INNER JOIN GUIA_DETALLE GD ON A.CodArticulo = GD.CodArticulo
    INNER JOIN GUIA_ENVIO GE ON GD.NumGuia = GE.NumGuia
    GROUP BY A.CodLinea, GE.CodTienda
) AS datos
PIVOT (
    SUM(CantidadEnviada) FOR CodTienda IN ([101], [102], [103], [104], [105], [106], [107], [108], [109], [110])
) AS tabla_pivot
ORDER BY CodLinea;
GO

-- 37. Mostrar mes y columnas por transportistas con totales
SELECT 
    [501] AS Transportista_501,
    [502] AS Transportista_502,
    [503] AS Transportista_503
FROM (
    SELECT 
        YEAR(GE.FechaSalida) * 100 + MONTH(GE.FechaSalida) AS AñoMes,
        GE.CodTransportista,
        SUM(GD.CantidadEnviada) AS TotalEnviado
    FROM GUIA_ENVIO GE
    INNER JOIN GUIA_DETALLE GD ON GE.NumGuia = GD.NumGuia
    GROUP BY YEAR(GE.FechaSalida) * 100 + MONTH(GE.FechaSalida), GE.CodTransportista
) AS datos
PIVOT (
    SUM(TotalEnviado) FOR CodTransportista IN ([501], [502], [503])
) AS tabla_pivot
ORDER BY AñoMes;
GO

-- 38. Contar proveedores por rango de variedad de artículos pivotado
SELECT 
    [1-5] AS Rango_1_5,
    [6-10] AS Rango_6_10,
    [11-20] AS Rango_11_20
FROM (
    SELECT 
        P.CodProveedor,
        CASE 
            WHEN COUNT(A.CodArticulo) BETWEEN 1 AND 5 THEN '1-5'
            WHEN COUNT(A.CodArticulo) BETWEEN 6 AND 10 THEN '6-10'
            ELSE '11-20'
        END AS RangoArticulos,
        COUNT(A.CodArticulo) AS CantArticulos
    FROM PROVEEDOR P
    LEFT JOIN ARTICULO A ON P.CodProveedor = A.CodProveedor
    GROUP BY P.CodProveedor
) AS datos
PIVOT (
    COUNT(CantArticulos) FOR RangoArticulos IN ([1-5], [6-10], [11-20])
) AS tabla_pivot;
GO

-- 39. Mostrar CodArticulo y columnas por aho con montos total vendido
SELECT * FROM (
    SELECT 
        GD.CodArticulo,
        YEAR(GE.FechaSalida) AS Año,
        CAST(SUM(GD.CantidadEnviada * GD.PrecioVenta) AS DECIMAL(18,2)) AS MontoVendido
    FROM GUIA_ENVIO GE
    INNER JOIN GUIA_DETALLE GD ON GE.NumGuia = GD.NumGuia
    GROUP BY GD.CodArticulo, YEAR(GE.FechaSalida)
) AS datos
PIVOT (
    SUM(MontoVendido) FOR Año IN ([2025])
) AS tabla_pivot
ORDER BY CodArticulo;
GO

-- 40. Mostrar Mes y columnas por tienda (CASE alternativo)
SELECT 
    AñoMes,
    ISNULL([101], 0) AS Tienda_101,
    ISNULL([102], 0) AS Tienda_102,
    ISNULL([103], 0) AS Tienda_103,
    ISNULL([104], 0) AS Tienda_104,
    ISNULL([105], 0) AS Tienda_105
FROM (
    SELECT 
        YEAR(GE.FechaSalida) * 100 + MONTH(GE.FechaSalida) AS AñoMes,
        GE.CodTienda,
        COUNT(GE.NumGuia) AS CantidadGuias
    FROM GUIA_ENVIO GE
    GROUP BY YEAR(GE.FechaSalida) * 100 + MONTH(GE.FechaSalida), GE.CodTienda
) AS datos
PIVOT (
    SUM(CantidadGuias) FOR CodTienda IN ([101], [102], [103], [104], [105])
) AS tabla_pivot
ORDER BY AñoMes;
GO

-- ========================================================================
-- SECCIÓN V: CLÁUSULA HAVING
-- ========================================================================

-- 41. Mostrar CodLinea y CantArticulos donde CantArticulos > 10
SELECT 
    A.CodLinea,
    COUNT(A.CodArticulo) AS CantArticulos
FROM ARTICULO A
GROUP BY A.CodLinea
HAVING COUNT(A.CodArticulo) > 1
ORDER BY A.CodLinea;
GO

-- 42. Mostrar CodProveedor y MontoTotal donde MontoTotal > 50000
SELECT 
    P.CodProveedor,
    SUM(CAST(A.StockActual * A.PrecioProveedor AS DECIMAL(18,2))) AS MontoTotal
FROM PROVEEDOR P
LEFT JOIN ARTICULO A ON P.CodProveedor = A.CodProveedor
GROUP BY P.CodProveedor
HAVING SUM(CAST(A.StockActual * A.PrecioProveedor AS DECIMAL(18,2))) > 50000
ORDER BY MontoTotal DESC;
GO

-- 43. Mostrar CodTienda y PromediGuia donde PromediGuia > 1600
SELECT 
    GE.CodTienda,
    SUM(GD.CantidadEnviada * GD.PrecioVenta) AS PromedioGuia
FROM GUIA_ENVIO GE
INNER JOIN GUIA_DETALLE GD 
    ON GE.NumGuia = GD.NumGuia
GROUP BY GE.CodTienda
HAVING SUM(GD.CantidadEnviada * GD.PrecioVenta) > 1600
ORDER BY PromedioGuia DESC;
GO

-- 44. Mostrar CodArticulo y TotalSolicitado > 500
SELECT 
    OD.CodArticulo,
    SUM(OD.CantidadSolicitada) AS TotalSolicitado
FROM ORDEN_DETALLE OD
GROUP BY OD.CodArticulo
HAVING SUM(OD.CantidadSolicitada) > 500
ORDER BY TotalSolicitado DESC;
GO

-- 45. Mostrar CodTransportista y CantGuias >= 5
SELECT 
    GE.CodTransportista,
    COUNT(GE.NumGuia) AS CantGuias
FROM GUIA_ENVIO GE
GROUP BY GE.CodTransportista
HAVING COUNT(GE.NumGuia) >= 5
ORDER BY CantGuias DESC;
GO

-- 46. Mostrar líneas donde SUM(StockActual) < SUM(StockMinimo * NumArticulos) 
SELECT 
    L.CodLinea,
    L.NomLinea,
    SUM(A.StockActual) AS StockTotal,
    COUNT(A.CodArticulo) AS CantArticulos,
    SUM(A.StockMinimo) AS StockMinimoTotal
FROM LINEA L
LEFT JOIN ARTICULO A ON L.CodLinea = A.CodLinea
GROUP BY L.CodLinea, L.NomLinea
HAVING SUM(A.StockActual) < COUNT(A.CodArticulo) * 10
ORDER BY L.CodLinea;
GO

-- 47. Mostrar proveedores donde MAX(PrecioProveedor) > 100
SELECT 
    P.CodProveedor,
    P.NomProveedor,
    MAX(A.PrecioProveedor) AS PrecioMaximo
FROM PROVEEDOR P
LEFT JOIN ARTICULO A ON P.CodProveedor = A.CodProveedor
GROUP BY P.CodProveedor, P.NomProveedor
HAVING MAX(A.PrecioProveedor) > 100
ORDER BY PrecioMaximo DESC;
GO

-- 48. Mostrar líneas con AVG(CantidadEnviadas) > 50 y COUNT(NumArticulos) >= 10
SELECT 
    L.CodLinea,
    L.NomLinea,
    AVG(CAST(GD.CantidadEnviada AS DECIMAL(10,2))) AS PromedioCantidad,
    COUNT(A.CodArticulo) AS CantArticulos
FROM LINEA L
LEFT JOIN ARTICULO A ON L.CodLinea = A.CodLinea
LEFT JOIN GUIA_DETALLE GD ON A.CodArticulo = GD.CodArticulo
GROUP BY L.CodLinea, L.NomLinea
HAVING AVG(CAST(GD.CantidadEnviada AS DECIMAL(10,2))) > 50 
   AND COUNT(A.CodArticulo) >= 1
ORDER BY L.CodLinea;
GO

-- 49. Mostrar CodLinea donde MAX(Precio) - MIN(Precio) > 20
SELECT 
    A.CodLinea,
    L.NomLinea,
    MAX(A.PrecioProveedor) AS PrecioMax,
    MIN(A.PrecioProveedor) AS PrecioMin,
    MAX(A.PrecioProveedor) - MIN(A.PrecioProveedor) AS Diferencia
FROM ARTICULO A
INNER JOIN LINEA L ON A.CodLinea = L.CodLinea
GROUP BY A.CodLinea, L.NomLinea
HAVING MAX(A.PrecioProveedor) - MIN(A.PrecioProveedor) > 20
ORDER BY Diferencia DESC;
GO

-- 50. Mostrar CodProveedor con COUNT(articulos) donde AVG(StockActual) < 20 y con COUNT > 5
SELECT 
    P.CodProveedor,
    P.NomProveedor,
    COUNT(A.CodArticulo) AS CantArticulos,
    AVG(CAST(A.StockActual AS DECIMAL(10,2))) AS PromedioStock
FROM PROVEEDOR P
LEFT JOIN ARTICULO A 
    ON P.CodProveedor = A.CodProveedor
GROUP BY 
    P.CodProveedor,
    P.NomProveedor
HAVING 
    COUNT(A.CodArticulo) > 5
    AND AVG(CAST(A.StockActual AS DECIMAL(10,2))) < 20;
GO